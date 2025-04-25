export const plans = [
  {
    id: 1,
    title: "Startup",
    price: 180,

    features: [
      "Web & Mobile",
      "Free Custom Domain",
      "Best Hosting Ever",
      "Outstanding Support",
      "Web Design",
    ],
  },
  {
    id: 2,
    title: "Startup",
    price: 180,

    features: [
      "Web & Mobile",
      "Free Custom Domain",
      "Best Hosting Ever",
      "Outstanding Support",
      "Web Design",
    ],
  },
  {
    id: 3,
    title: "Startup",
    price: 180,

    features: [
      "Web & Mobile",
      "Free Custom Domain",
      "Best Hosting Ever",
      "Outstanding Support",
      "Web Design",
    ],
  },
  // Add more plans as needed
];

export const plansData = {
  headers: [ 'Team Members', 'Storage Space', 'Projects', 'API Access', 'Custom Domain', 'Analytics', 'Support'],
  plans: [
    {
      name: 'Basic',
      price: '$29',
      period: 'per month',
      values: ['Up to 10', '20GB', '3', '-', '-', 'Basic', 'Email'],
      action: {
        label: 'Choose Basic',
        href: '/contact',
      },
    },
    {
      name: 'Professional',
      price: '$79',
      period: 'per month',
      values: ['Up to 50', '100GB', '15', '•', '•', 'Advanced', 'Priority'],
      action: {
        label: 'Choose Pro',
        href: '/contact',
      },
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      values: ['Unlimited', 'Unlimited', 'Unlimited', '•', '•', 'Custom', 'Dedicated'],
      action: {
        label: 'Contact Sales',
        href: '/contact',
      },
    },
  ],
};
