'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Basic",
      price: "₹499",
      icon: Sparkles,
      desc: "Perfect for individuals and small projects",
      features: [
        "5 Whiteboards",
        "Basic drawing tools",
        "Cloud storage (1GB)",
        "Email support",
        "Export to PNG/PDF"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Pro",
      price: "₹999",
      icon: Zap,
      desc: "Best for professionals and teams",
      features: [
        "Unlimited Whiteboards",
        "Advanced tools & shapes",
        "Cloud storage (10GB)",
        "Priority support",
        "Real-time collaboration",
        "OCR text recognition",
        "Export to multiple formats"
      ],
      popular: true,
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "₹1999",
      icon: Crown,
      desc: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "24/7 Premium support",
        "Dedicated account manager",
        "Advanced analytics",
        "Custom integrations",
        "SSO & Security features",
        "API access"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      plan: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      plan: Yup.string().required("Please select a plan"),
    }),
    onSubmit: (values) => {
      alert(`✅ Order placed!\nName: ${values.name}\nEmail: ${values.email}\nPlan: ${values.plan}`);
    },
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 text-lg">
            Select the perfect plan for your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'md:scale-105 ring-2 ring-indigo-600' : ''
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`w-14 h-14 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white" size={28} />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.desc}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    formik.setFieldValue('plan', plan.name);
                  }}
                  className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            );
          })}
        </div>

        {/* Checkout Form */}
        {selectedPlan && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Complete Your Order
              </h2>
              <p className="text-gray-600 mb-6">
                You have selected the <span className="font-semibold text-indigo-600">{selectedPlan}</span> plan
              </p>

              <form onSubmit={formik.handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    {...formik.getFieldProps('name')}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    {...formik.getFieldProps('email')}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>

                <input type="hidden" name="plan" value={selectedPlan} />

                <button
                  type="submit"
                  className="w-full py-4 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                >
                  Confirm & Pay {plans.find(p => p.name === selectedPlan)?.price}/month
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;
