import { Award, Play, Users } from "lucide-react";

const WhyUs = () => {
  const featureItems = [
    {
      icon: Users,
      title: "Expert Instructors",
      desc: "Learn from industry professionals with real-world experience.",
    },
    {
      icon: Award,
      title: "Verified Certificates",
      desc: "Earn certificates that are recognized by top companies worldwide.",
    },
    {
      icon: Play,
      title: "Lifetime Access",
      desc: "Learn at your own pace with lifetime access to all your courses.",
    },
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Our Benefits
          </h2>
          <h3 className="text-4xl font-extrabold text-[#1E103F]">
            Why Choose BooKnook?
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureItems.map((f, i) => (
            <div
              key={i}
              className="group p-8 bg-white border border-slate-200 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center space-y-6"
            >
              <div className="mx-auto w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-[#FF006E] group-hover:bg-linear-to-br group-hover:from-[#FF006E] group-hover:via-[#FF3D7F] group-hover:to-[#FF5E62] group-hover:text-white transition-all duration-300">
                <f.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold">{f.title}</h4>
              <p className="text-[#1E103F]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
