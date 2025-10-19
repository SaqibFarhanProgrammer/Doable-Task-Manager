import React from "react"

const plans = [
  {
    title: "Free Plan",
    price: "$0",
    desc: "Get started with awesome features of Modulify at no cost.",
    features: [
      { text: "1 Project", active: true },
      { text: "2 Pages per project", active: true },
      { text: "25 Components per page", active: true },
      { text: "Light & Dark Wireframes", active: true },
      { text: "Apply all design systems", active: true },
      { text: "Export Wireframe to Webflow", active: false },
      { text: "Export Design to Webflow", active: false },
      { text: "Custom Design System", active: false },
      { text: "Dedicated Support", active: false },
    ],
  },
  {
    title: "Starter Plan",
    price: "$19",
    period: "/month paid yearly",
    desc: "Build projects that convert and help your growth.",
    features: [
      { text: "2 Projects", active: true },
      { text: "20 Pages per project", active: true },
      { text: "40 Components per page", active: true },
      { text: "Light & Dark Wireframes", active: true },
      { text: "Apply all design systems", active: true },
      { text: "Export Wireframe to Webflow", active: true },
      { text: "Export Design to Webflow", active: true },
      { text: "Custom Design System", active: false },
      { text: "Dedicated Support", active: false },
    ],
  },
  {
    title: "Pro Plan",
    price: "$38",
    period: "/month paid yearly",
    desc: "Experience the full power of Modulify.",
    best: true,
    features: [
      { text: "Unlimited Projects", active: true },
      { text: "Unlimited Pages per project", active: true },
      { text: "Unlimited Components per page", active: true },
      { text: "Light & Dark Wireframes", active: true },
      { text: "Apply all design systems", active: true },
      { text: "Export Wireframe to Webflow", active: true },
      { text: "Export Design to Webflow", active: true },
      { text: "Custom Design System", active: true },
      { text: "Dedicated Support", active: true },
    ],
  },
]

function Pricing() {
  return (
    <section className="w-full font-['a'] py-20 bg-[#fafafa] text-black">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Build a website with AI</h1>
        <p className="text-xl">Free for 7 days</p>
        <p className="text-gray-600 mt-3">
          Choose the best plan for your business. Change plans as you grow.
        </p>
      </div>

      <div className="flex justify-center mb-10 gap-2">
        <button className="px-4 py-2 border border-gray-300 rounded-full text-sm bg-white">
          Monthly
        </button>
        <button className="px-4 py-2 border border-black bg-black text-white rounded-full text-sm">
          Yearly (save 20%)
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`w-80 rounded-2xl p-[2px] ${
              plan.best ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-200"
            }`}
          >
            
            <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                {plan.best && (
                  <p className="text-xs text-purple-600 font-semibold mb-2">Best Value</p>
                )}
                <h2 className="text-2xl font-['a'] font-semibold mb-2">{plan.title}</h2>
                <div className="flex items-end gap-1 mb-4">
                  <h3 className="text-4xl font-bold">{plan.price}</h3>
                  <span className="text-gray-600 text-sm">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>
                <ul className="space-y-2">
                  {plan.features.map((f, index) => (
                    <li
                      key={index}
                      className={`text-sm flex items-center gap-2 ${
                        f.active ? "text-black" : "text-gray-400 line-through"
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${f.active ? "bg-black" : "bg-gray-300"}`}></span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-8 w-full py-3 rounded-full font-medium transition-all ${
                  plan.best
                    ? "bg-black text-white hover:bg-gray-900"
                    : "bg-white border border-gray-300 hover:bg-gray-100"
                }`}
              >
                Try it now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing