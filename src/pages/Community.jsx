import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Globe,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import DiscordIcon from "./DiscordIcon";
import Navigation from "../components/Navigation";
import ModernBackground from "../components/ModernBackground";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const SocialButton = ({ icon: Icon, label, color, hoverColor, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`${color} ${hoverColor} text-white px-8 py-3 rounded-full font-semibold 
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
    focus:ring-offset-gray-900 focus:ring-opacity-60 inline-flex items-center gap-3 
    shadow-lg hover:shadow-xl`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
    {label}
  </motion.button>
);

const Community = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Active Community",
      description:
        "Join thousands of developers sharing knowledge and experiences.",
    },
    {
      icon: <Globe className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Global Network",
      description:
        "Connect with peers from around the world in real-time discussions.",
    },
    {
      icon: <Sparkles className="w-12 h-12 mb-4 text-blue-400" />,
      title: "Growing Together",
      description:
        "Learn, share, and build amazing projects with fellow developers.",
    },
  ];

  const activities = [
    {
      title: "Weekly Meetups",
      description: "Join our virtual meetups every Wednesday",
      members: "2.5k members attending",
    },
    {
      title: "Code Reviews",
      description: "Get feedback on your projects from experts",
      members: "1.2k active reviewers",
    },
    {
      title: "Learning Groups",
      description: "Join specialized learning cohorts",
      members: "3.8k participants",
    },
  ];

  const handleWhatsAppJoin = () => {
    window.open("https://whatsapp.com/channel/your-channel-link", "_blank");
  };

  const handleDiscordJoin = () => {
    window.open("https://discord.gg/your-invite-link", "_blank");
  };

  return (
    <ModernBackground>
      <div className="h-screen overflow-y-auto no-scrollbar">
        <Navigation />
        <div className="min-h-screen pt-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white min-h-[60vh] flex items-center justify-center"
          >
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
              >
                Join Our Thriving
                <br />
                Developer Community
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
              >
                Connect with passionate developers, share knowledge, and build
                amazing things together.
                <br />
                Your journey to becoming a better developer starts here.
              </motion.p>

              {/* Social Channels Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col md:flex-row gap-4 justify-center items-center"
              >
                <SocialButton
                  icon={MessageSquare}
                  label="Join WhatsApp Channel"
                  color="bg-green-600"
                  hoverColor="hover:bg-green-700"
                  onClick={handleWhatsAppJoin}
                />
                <SocialButton
                  icon={DiscordIcon}
                  label="Join Discord Server"
                  color="bg-indigo-600"
                  hoverColor="hover:bg-indigo-700"
                  onClick={handleDiscordJoin}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                Why Join Our Community?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariant}
                    className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:scale-105 border border-gray-800"
                  >
                    {feature.icon}
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Channels Stats */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-16 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  variants={fadeUpVariant}
                  className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm p-8 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
                >
                  <MessageSquare className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    WhatsApp Community
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Get instant updates and join discussions with our growing
                    WhatsApp community.
                  </p>
                  <p className="text-green-400 font-semibold">5.2k+ Members</p>
                </motion.div>

                <motion.div
                  variants={fadeUpVariant}
                  className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 backdrop-blur-sm p-8 rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <DiscordIcon className="w-12 h-12 text-indigo-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Discord Server
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Join our active Discord community for real-time
                    collaboration and support.
                  </p>
                  <p className="text-indigo-400 font-semibold">10k+ Members</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Activities Section */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
                Community Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariant}
                    className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <MessageCircle className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{activity.description}</p>
                    <p className="text-sm text-blue-400">{activity.members}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action with Social Options */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white py-20 px-4"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Ready to join our community?
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <SocialButton
                    icon={MessageSquare}
                    label="WhatsApp Channel"
                    color="bg-green-600"
                    hoverColor="hover:bg-green-700"
                    onClick={handleWhatsAppJoin}
                  />
                  <SocialButton
                    icon={DiscordIcon}
                    label="Join Discord Server"
                    color="bg-indigo-600"
                    hoverColor="hover:bg-indigo-700"
                    onClick={handleDiscordJoin}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ModernBackground>
  );
};

export default Community;
