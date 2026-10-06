import { FormEvent, ReactNode, useState } from "react";
import productBack from "./assets/elias-honey-back.jpg";
import productFront from "./assets/elias-honey-front.jpg";

function BrandLogo({
  className = "h-14 w-auto",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const petalAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const colour = light ? "#ffffff" : "#24372a";

  return (
    <svg
      className={className}
      viewBox="0 0 344 72"
      role="img"
      aria-label="Natural Detox Therapy"
    >
      <g
        transform="translate(35 36)"
        fill="none"
        stroke={colour}
        strokeWidth="1.8"
        strokeLinejoin="round"
      >
        {petalAngles.map((angle) => (
          <path
            key={`outer-${angle}`}
            d="M0 0C-8-8-8-20 0-30C8-20 8-8 0 0Z"
            transform={`rotate(${angle})`}
          />
        ))}
        {petalAngles.map((angle) => (
          <path
            key={`inner-${angle}`}
            d="M0 0C-5-6-5-14 0-21C5-14 5-6 0 0Z"
            transform={`rotate(${angle + 22.5})`}
          />
        ))}
        <circle r="3.2" fill={colour} stroke="none" />
      </g>
      <text
        x="78"
        y="35"
        fill={colour}
        fontFamily="Jost, sans-serif"
        fontSize="27"
        fontWeight="300"
        letterSpacing="-1"
      >
        natural detox
      </text>
      <text
        x="80"
        y="53"
        fill={colour}
        fontFamily="Jost, sans-serif"
        fontSize="9"
        fontWeight="600"
        letterSpacing="5.5"
      >
        THERAPY
      </text>
    </svg>
  );
}

function Icon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function App() {
  const [quantity, setQuantity] = useState(1);
  const [ordered, setOrdered] = useState(false);

  const price = 24;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOrdered(true);
    window.setTimeout(() => {
      document
        .getElementById("order")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 0);
  }

  return (
    <div className="min-h-screen bg-[#f7f8f3] text-[#24372a]">
      <div className="bg-[#294432] px-5 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
        Free delivery across London · Pay cash at your door
      </div>

      <header className="border-b border-[#294432]/10 bg-white/80 px-5 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
          <a href="#" aria-label="Natural Detox Therapy home">
            <BrandLogo className="h-14 w-[235px] sm:w-[270px]" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-[#6b884d]" href="#story">
              Our honey
            </a>
            <a className="transition-colors hover:text-[#6b884d]" href="#benefits">
              Why it’s special
            </a>
            <a className="transition-colors hover:text-[#6b884d]" href="#delivery">
              Delivery
            </a>
          </nav>
          <a
            href="#order"
            className="rounded-full bg-[#294432] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-[#3a5a44]"
          >
            Order now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-5 py-10 sm:px-8 sm:py-14 lg:py-20">
          <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#dfe9d5]/50 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#e8efe2] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#52715b]">
                <span className="h-2 w-2 rounded-full bg-[#92ad68]" />
                Natural Detox Therapy · Bio essentials
              </div>
              <h1 className="font-serif text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-[#24372a] sm:text-6xl lg:text-[5.3rem]">
                Pure honey,
                <br />
                <span className="italic text-[#718e52]">just as nature</span> made it.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#496056]">
                Rare wild rocket honey with a deep amber glow, gathered from
                blossoms growing far from intensive farming. Bold, floral and
                naturally unforgettable.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#order"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#294432] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(41,68,50,0.16)] transition hover:-translate-y-0.5 hover:bg-[#3a5a44]"
                >
                  Order for £24
                  <Icon>
                    <path d="M5 12h14M14 7l5 5-5 5" />
                  </Icon>
                </a>
                <div className="flex items-center gap-3 px-2">
                  <div className="flex text-[#e2a93b]" aria-label="5 out of 5 stars">
                    {"★★★★★"}
                  </div>
                  <span className="text-sm text-[#496056]">Loved by London food lovers</span>
                </div>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#21352a]/15 pt-6 text-sm font-medium text-[#496056]">
                {["475g glass jar", "100% raw honey", "No additives"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Icon className="text-[#356044]">
                      <path d="m5 12 4 4L19 6" />
                    </Icon>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl pb-10 lg:ml-auto">
              <div className="absolute -inset-6 rounded-[3rem] bg-[#e7eee1]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#294432]/10 bg-white shadow-[0_30px_70px_rgba(54,76,59,0.12)]">
                <img
                  src={productFront}
                  alt="Front of the wild rocket raw honey jar"
                  className="absolute inset-x-[7%] top-[4%] h-[90%] w-[86%] object-contain"
                />
                <div className="absolute right-5 top-5 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#dfeabf] text-center shadow-lg">
                  <span className="font-serif text-2xl font-bold text-[#294432]">£24</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#52715b]">475g jar</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-3 w-[40%] overflow-hidden rounded-3xl border border-[#294432]/10 bg-white p-2 shadow-[0_18px_40px_rgba(54,76,59,0.16)]">
                <img
                  src={productBack}
                  alt="Back label showing the honey origin, weight and storage information"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
                <p className="py-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-[#52715b]">
                  Full product details
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-[#edf2e8] px-5 py-14 text-[#24372a] sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            {[
              {
                title: "Naturally bold",
                text: "A layered flavour: floral first, then warm and gently peppery.",
                icon: <path d="M12 3c4 3 7 6 7 11a7 7 0 0 1-14 0c0-5 3-8 7-11Z" />,
              },
              {
                title: "Nothing added",
                text: "Raw and unfiltered, with no syrups, preservatives or artificial flavour.",
                icon: (
                  <>
                    <path d="M12 22V8" />
                    <path d="M12 13c-5 0-7-3-7-7 5 0 7 3 7 7ZM12 17c5 0 7-3 7-7-5 0-7 3-7 7Z" />
                  </>
                ),
              },
              {
                title: "Doorstep simple",
                text: "Order online, receive it in London, then pay cash when it arrives.",
                icon: (
                  <>
                    <path d="M3 10.5 12 3l9 7.5" />
                    <path d="M5 9v11h14V9M9 20v-6h6v6" />
                  </>
                ),
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#52715b] shadow-sm">
                  <Icon>{benefit.icon}</Icon>
                </div>
                <div>
                  <h2 className="font-serif text-2xl">{benefit.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#607066]">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="story" className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718e52]">
                From flower to jar
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#24372a] sm:text-5xl">
                Honest honey, made the old-fashioned way.
              </h2>
              <p className="mt-6 text-base leading-7 text-[#56685f]">
                Wild rocket flowers are small, bright and fiercely aromatic.
                Mediterranean bees turn their nectar into this distinctive,
                creamy honey with a rounded sweetness and herbal finish.
              </p>
              <p className="mt-4 text-base leading-7 text-[#56685f]">
                We keep every batch as close to the hive as possible, gently
                strained and poured into recyclable glass.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[2rem] bg-[#f0f3e5] p-7 pt-16">
                <span className="font-serif text-5xl text-[#8aa064]">01</span>
                <h3 className="mt-5 font-serif text-xl">Harvested in small batches</h3>
              </div>
              <div className="translate-y-8 rounded-[2rem] bg-[#e3ece2] p-7 pt-16">
                <span className="font-serif text-5xl text-[#356044]">02</span>
                <h3 className="mt-5 font-serif text-xl">Delivered fresh in London</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="order" className="bg-[#e8eee3] px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_60px_rgba(49,75,56,0.10)] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-80 overflow-hidden bg-[#23372c] p-8 text-white sm:p-10">
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border border-[#bcd28c]/30" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8df96]">
                Your order
              </p>
              <h2 className="mt-4 font-serif text-4xl">Wild Rocket Honey</h2>
              <p className="mt-3 text-sm text-[#c9d2cc]">Raw & unprocessed · 475g</p>
              <div className="mt-10 flex items-center justify-between border-y border-white/15 py-5">
                <span className="text-sm text-[#c9d2cc]">Quantity</span>
                <div className="flex items-center overflow-hidden rounded-full border border-white/25">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="h-10 w-10 transition hover:bg-white/10"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-9 text-center font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.min(6, value + 1))}
                    className="h-10 w-10 transition hover:bg-white/10"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <p className="text-sm text-[#c9d2cc]">Total to pay on delivery</p>
                  <p className="mt-1 text-xs text-[#9eb0a6]">Free London delivery</p>
                </div>
                <span className="font-serif text-4xl text-[#c8df96]">£{price * quantity}</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              {ordered ? (
                <div className="flex h-full min-h-96 flex-col items-center justify-center text-center" role="status">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#dce5d7] text-[#356044]">
                    <Icon className="h-8 w-8">
                      <path d="m5 12 4 4L19 6" />
                    </Icon>
                  </div>
                  <h2 className="mt-6 font-serif text-4xl text-[#183226]">Order received.</h2>
                  <p className="mt-4 max-w-md leading-7 text-[#56685f]">
                    Thank you. We’ll call to confirm your London delivery time.
                    Please have £{price * quantity} ready in cash when your honey arrives.
                  </p>
                  <button
                    type="button"
                    onClick={() => setOrdered(false)}
                    className="mt-7 text-sm font-bold text-[#356044] underline decoration-[#356044]/30 underline-offset-4"
                  >
                    Place another order
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#718e52]">
                        Cash on delivery
                      </p>
                      <h2 className="mt-2 font-serif text-3xl text-[#183226]">
                        Where should we bring it?
                      </h2>
                    </div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#edf2e8] text-[#52715b] sm:flex">
                      <Icon>
                        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
                        <circle cx="12" cy="10" r="2" />
                      </Icon>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold">
                      Full name
                      <input
                        required
                        name="name"
                        autoComplete="name"
                        className="h-12 rounded-xl border border-[#21352a]/20 bg-white px-4 font-normal outline-none transition placeholder:text-[#87938d] focus:border-[#356044] focus:ring-2 focus:ring-[#356044]/10"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold">
                      Mobile number
                      <input
                        required
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="h-12 rounded-xl border border-[#21352a]/20 bg-white px-4 font-normal outline-none transition placeholder:text-[#87938d] focus:border-[#356044] focus:ring-2 focus:ring-[#356044]/10"
                        placeholder="07XXX XXXXXX"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
                      London delivery address
                      <input
                        required
                        name="address"
                        autoComplete="street-address"
                        className="h-12 rounded-xl border border-[#21352a]/20 bg-white px-4 font-normal outline-none transition placeholder:text-[#87938d] focus:border-[#356044] focus:ring-2 focus:ring-[#356044]/10"
                        placeholder="House / flat number and street"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold">
                      Postcode
                      <input
                        required
                        name="postcode"
                        autoComplete="postal-code"
                        className="h-12 rounded-xl border border-[#21352a]/20 bg-white px-4 font-normal uppercase outline-none transition placeholder:normal-case placeholder:text-[#87938d] focus:border-[#356044] focus:ring-2 focus:ring-[#356044]/10"
                        placeholder="London postcode"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold">
                      Preferred time
                      <select
                        name="time"
                        className="h-12 rounded-xl border border-[#21352a]/20 bg-white px-4 font-normal outline-none transition focus:border-[#356044] focus:ring-2 focus:ring-[#356044]/10"
                      >
                        <option>Any time</option>
                        <option>10am – 1pm</option>
                        <option>1pm – 5pm</option>
                        <option>5pm – 8pm</option>
                      </select>
                    </label>
                    <button
                      type="submit"
                      className="mt-2 flex h-14 items-center justify-center gap-3 rounded-full bg-[#294432] px-7 text-sm font-bold text-white shadow-[0_10px_24px_rgba(41,68,50,0.18)] transition hover:-translate-y-0.5 hover:bg-[#3a5a44] sm:col-span-2"
                    >
                      Confirm cash order · £{price * quantity}
                      <Icon>
                        <path d="M5 12h14M14 7l5 5-5 5" />
                      </Icon>
                    </button>
                    <p className="text-center text-xs leading-5 text-[#6d7d74] sm:col-span-2">
                      No card details needed. We’ll call before dispatching your order.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section id="delivery" className="px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#718e52]">
                London delivery
              </p>
              <h2 className="mt-3 font-serif text-3xl">Simple from hive to home.</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#56685f]">
              <span>1. Order online</span>
              <span className="hidden text-[#8aa064] sm:inline">→</span>
              <span>2. We confirm by phone</span>
              <span className="hidden text-[#8aa064] sm:inline">→</span>
              <span>3. Pay cash at your door</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#21352a]/15 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-[#64746b] sm:flex-row sm:text-left">
          <BrandLogo className="h-12 w-[220px]" />
          <p>© 2025 Natural Detox Therapy · Natural honey delivered across London</p>
          <p>Store in a cool, dry place</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
