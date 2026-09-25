export const BUSINESS = {
  name: "EL CHEFE Private Chef Service",
  shortName: "EL CHEFE",
  tagline: "Private Chef Service by Chef Edem",
  chef: "Edem",
  ratePerDay: 500,
  currency: "GH₵",
  workingDays: "Monday to Sunday",
  workingHours: "7:00 AM – 3:00 PM",
  serviceDurationHours: 8,
  cuisines: [
    "Local Ghanaian dishes",
    "Continental dishes"
  ],
  services: [
    {
      id: "fresh-meals",
      number: "01",
      title: "Freshly Prepared Meals",
      description: "Meals prepared fresh in your kitchen, featuring local Ghanaian dishes or continental dishes made to your preferences.",
      highlights: [
        "Cooked fresh on-site in your kitchen",
        "Local Ghanaian dishes and continental dishes",
        "Menu options can be discussed based on your preferences"
      ]
    },
    {
      id: "kitchen-cleaning",
      number: "02",
      title: "Kitchen Cleaning After Cooking",
      description: "Complete kitchen cleanup after meal preparation, leaving your pots, cooking utensils, and work surfaces clean and tidy.",
      highlights: [
        "Pots, pans, and cooking utensils washed",
        "Cooking surfaces and countertops wiped down",
        "Kitchen left clean after cooking"
      ]
    }
  ],
  contacts: {
    phonePrimary: "0248860055",
    phoneSecondary: "0274308198",
    phonePrimaryDisplay: "024 886 0055",
    phoneSecondaryDisplay: "027 430 8198",
    email: "boadiedemmichael816@gmail.com",
    whatsappPrimaryUrl: "https://wa.me/233248860055",
    whatsappSecondaryUrl: "https://wa.me/233274308198",
    telPrimaryUrl: "tel:0248860055",
    telSecondaryUrl: "tel:0274308198",
    mailtoUrl: "mailto:boadiedemmichael816@gmail.com"
  }
};

export const getWhatsAppLink = (message?: string, useSecondary = false) => {
  const phone = useSecondary ? "233274308198" : "233248860055";
  const defaultText = "Hello Chef Edem,\n\nI would like to enquire about your private chef service.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${phone}?text=${text}`;
};
