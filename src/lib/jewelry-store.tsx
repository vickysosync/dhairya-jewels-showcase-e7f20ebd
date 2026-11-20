import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  metal: string;
  price: number;
  originalPrice?: number;
  image: string;
  sku: string;
  description: string;
  weight: string;
  stone: string;
  stock: number;
  featured: boolean;
  newest: boolean;
  collection: string;
};

export type LineItem = { productId: string; quantity: number };
export type DemoOrder = { id: string; name: string; email: string; phone: string; total: number; status: string; date: string; items: LineItem[]; address: string };
export type DemoRecord = Record<string, string | number | boolean> & { id: string };
export type DemoState = {
  products: Product[];
  categories: DemoRecord[];
  collections: DemoRecord[];
  orders: DemoOrder[];
  customers: DemoRecord[];
  banners: DemoRecord[];
  gallery: DemoRecord[];
  testimonials: DemoRecord[];
  coupons: DemoRecord[];
  newsletter: DemoRecord[];
  enquiries: DemoRecord[];
  settings: Record<string, string>;
  homepage: Record<string, string>;
  cart: LineItem[];
  wishlist: string[];
};

const catalogSeed: Product[] = [
  ["Zaveri Heritage Collar", "Necklaces", "22K Yellow Gold", 286500, "/images/gold-necklace.png", "Heritage", true, false, "Ruby & Polki"],
  ["Noor Solitaire Ring", "Rings", "18K Yellow Gold", 94500, "/images/diamond-ring.png", "Diamond Elegance", true, true, "Demo diamond"],
  ["Gulabi Jhumka Earrings", "Earrings", "22K Yellow Gold", 128000, "/images/gold-earrings.png", "Traditional", true, false, "Ruby & pearl"],
  ["Aarohi Diamond Drops", "Earrings", "18K White Gold", 146000, "/images/diamond-earrings.png", "Diamond Elegance", true, true, "Demo diamonds"],
  ["Saanjh Tennis Bracelet", "Bracelets", "18K White Gold", 182000, "/images/diamond-bracelet.png", "Everyday Luxury", true, false, "Demo diamonds"],
  ["Rajwada Bridal Haar", "Bridal Jewellery", "22K Yellow Gold", 425000, "/images/bridal-necklace.png", "Bridal", true, true, "Ruby, emerald & pearl"],
  ["Mogra Engraved Bangles", "Bangles", "22K Yellow Gold", 214000, "/images/gold-bangles.png", "Royal Gold", true, false, "No stones"],
  ["Armaan Signet Ring", "Men's Jewellery", "18K Yellow Gold", 76500, "/images/mens-ring.png", "Contemporary", true, true, "Demo green gemstone"],
  ["Neelam Pendant", "Pendants", "18K Yellow Gold", 112000, "/images/sapphire-pendant.png", "Gemstone", true, false, "Demo sapphire & diamonds"],
  ["Meher Craft Necklace", "Necklaces", "22K Yellow Gold", 198000, "/images/bridal-necklace.png", "Signature", true, false, "Ruby & pearl"],
  ["Sunehri Bloom Studs", "Earrings", "22K Yellow Gold", 68400, "/images/gold-earrings.png", "Everyday Luxury", false, true, "Demo diamonds"],
  ["Aditi Halo Band", "Rings", "18K White Gold", 89500, "/images/diamond-ring.png", "Diamond Elegance", true, false, "Demo diamonds"],
  ["Mira Gold Kada", "Bracelets", "22K Yellow Gold", 156000, "/images/gold-bangles.png", "Royal Gold", false, false, "No stones"],
  ["Tara Pear Necklace", "Necklaces", "18K Yellow Gold", 167500, "/images/sapphire-pendant.png", "Contemporary", true, true, "Demo sapphire"],
  ["Kundan Chandbali", "Earrings", "22K Yellow Gold", 139000, "/images/gold-earrings.png", "Bridal", true, false, "Kundan & pearl"],
  ["Ira Diamond Cuff", "Bracelets", "18K White Gold", 205000, "/images/diamond-bracelet.png", "Diamond Elegance", true, false, "Demo diamonds"],
  ["Vanya Ruby Ring", "Rings", "18K Yellow Gold", 73500, "/images/mens-ring.png", "Gemstone", false, true, "Demo ruby"],
  ["Aarna Temple Pendant", "Pendants", "22K Yellow Gold", 95800, "/images/gold-necklace.png", "Traditional", true, false, "No stones"],
  ["Ruhani Bridal Set", "Bridal Jewellery", "22K Yellow Gold", 398000, "/images/bridal-necklace.png", "Bridal", true, false, "Ruby, emerald & pearl"],
  ["Dewdrop Diamond Ring", "Rings", "18K White Gold", 108000, "/images/diamond-ring.png", "Diamond Elegance", false, true, "Demo diamonds"],
  ["Abeer Emerald Studs", "Earrings", "18K Yellow Gold", 88500, "/images/sapphire-pendant.png", "Gemstone", true, false, "Demo emerald"],
  ["Riva Gold Chain", "Necklaces", "22K Yellow Gold", 125000, "/images/gold-necklace.png", "Everyday Luxury", false, true, "No stones"],
  ["Kesar Filigree Bangles", "Bangles", "22K Yellow Gold", 248000, "/images/gold-bangles.png", "Traditional", true, false, "No stones"],
  ["Veer Onyx Band", "Men's Jewellery", "18K Yellow Gold", 82900, "/images/mens-ring.png", "Contemporary", false, true, "Demo onyx"],
].map(([name, category, metal, price, image, collection, featured, newest, stone], i) => {
  const productName = String(name);
  const slug = productName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return {
    id: `p-${i + 1}`,
    slug,
    name: productName,
    category: String(category),
    metal: String(metal),
    price: Number(price),
    ...(i % 5 === 1 ? { originalPrice: Math.round(Number(price) * 1.12) } : {}),
    image: String(image),
    sku: `DGJ-${String(i + 1).padStart(3, "0")}`,
    description: `A considered design from our ${String(collection).toLowerCase()} edit, imagined for the moments you keep close. Product details shown are illustrative demo information.`,
    weight: `${(6.2 + i * 0.73).toFixed(1)} g (demo)`,
    stone: `${String(stone)} (demo details)`,
    stock: 5 + (i % 16),
    featured: Boolean(featured),
    newest: Boolean(newest),
    collection: String(collection),
  };
});

const record = (id: string, fields: Record<string, string | number | boolean>): DemoRecord => ({ id, ...fields });
export const initialDemoState: DemoState = {
  products: catalogSeed,
  categories: ["Gold Jewellery", "Diamond Jewellery", "Silver Jewellery", "Platinum Jewellery", "Gemstone Jewellery", "Bridal Jewellery", "Men's Jewellery", "Rings", "Earrings", "Necklaces", "Bracelets", "Bangles", "Pendants"].map((name, i) => record(`cat-${i}`, { name, status: "Active", description: "A curated jewellery edit." })),
  collections: ["Bridal", "Royal Gold", "Diamond Elegance", "Everyday Luxury", "Traditional", "Contemporary", "Gemstone", "Signature"].map((name, i) => record(`collection-${i}`, { name, description: `Discover the ${name.toLowerCase()} collection.`, status: "Active" })),
  orders: [], customers: [],
  banners: [record("banner-1", { name: "A Study in Gold", heading: "Elegance That Lasts Forever", status: "Active" })],
  gallery: catalogSeed.slice(0, 8).map((p, i) => record(`gallery-${i}`, { name: p.name, category: p.category, image: p.image, status: "Active" })),
  testimonials: [record("testimonial-1", { name: "Aarushi M.", feedback: "A beautiful keepsake, finished with such care.", rating: 5, status: "Sample" }), record("testimonial-2", { name: "Rhea S.", feedback: "The details feel thoughtful from every angle.", rating: 5, status: "Sample" })],
  coupons: [record("coupon-1", { code: "WELCOME10", discount: "10%", validity: "Demo only", status: "Active" })], newsletter: [], enquiries: [],
  settings: { company: "Dhairya Gems and Jewels Private Limited", phone: "2545545939", email: "dhairyagemsandjewels@gmail.com", address: "Plot No. 44/4 or 44/46, Floor 3, Jewel Co-op Housing Society, Zaveri Bazaar / Dhanji Street, Mumbai, Maharashtra, India - 400003", footerCredit: "Designed and development by SOSynch Ai Tech" },
  homepage: { heroHeading: "Elegance That Lasts Forever", heroDescription: "Discover timeless jewellery crafted with passion, precision and exceptional artistry." },
  cart: [], wishlist: [],
};

type StoreContextValue = { state: DemoState; ready: boolean; update: (changes: Partial<DemoState>) => void; addToCart: (id: string, quantity?: number) => void; removeFromCart: (id: string) => void; setQuantity: (id: string, quantity: number) => void; toggleWishlist: (id: string) => void; reset: () => void };
const StoreContext = createContext<StoreContextValue | null>(null);
const STORAGE_KEY = "dhairya-demo-store-v1";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(initialDemoState);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: Partial<DemoState> = JSON.parse(saved);
        setState({ ...initialDemoState, ...parsed });
      }
    } catch { /* Keep the seeded demo if browser storage is unavailable. */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, ready]);
  const value = useMemo<StoreContextValue>(() => ({
    state,
    ready,
    update: (changes) => setState((current) => ({ ...current, ...changes })),
    addToCart: (id, quantity = 1) => setState((current) => ({ ...current, cart: current.cart.some((item) => item.productId === id) ? current.cart.map((item) => item.productId === id ? { ...item, quantity: item.quantity + quantity } : item) : [...current.cart, { productId: id, quantity }] })),
    removeFromCart: (id) => setState((current) => ({ ...current, cart: current.cart.filter((item) => item.productId !== id) })),
    setQuantity: (id, quantity) => setState((current) => ({ ...current, cart: quantity < 1 ? current.cart.filter((item) => item.productId !== id) : current.cart.map((item) => item.productId === id ? { ...item, quantity } : item) })),
    toggleWishlist: (id) => setState((current) => ({ ...current, wishlist: current.wishlist.includes(id) ? current.wishlist.filter((item) => item !== id) : [...current.wishlist, id] })),
    reset: () => setState(initialDemoState),
  }), [state, ready]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useJewelryStore() {
  const value = useContext(StoreContext);
  if (!value) throw new Error("StoreProvider is missing");
  return value;
}

export function money(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}