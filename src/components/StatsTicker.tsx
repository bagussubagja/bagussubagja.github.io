interface StatItem {
  number: string;
  label: string;
}

const stats: StatItem[] = [
  { number: "10+", label: "Mobile Apps" },
  { number: "5+", label: "Years Experience" },
  { number: "50K+", label: "Active Users" },
  { number: "3", label: "Companies" },
  { number: "97%", label: "Crash-Free Rate" },
  { number: "90%", label: "Test Coverage" },
  { number: "94%", label: "SonarQube Score" },
  { number: "12+", label: "Banking Products" },
];

// Duplicate for seamless infinite loop
const items = [...stats, ...stats];

const StatsTicker = () => {
  return (
    <section 
      className="ticker-wrap" 
      aria-label="Statistics"
      role="marquee"
    >
      <div className="ticker-track">
        {items.map((stat, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-num">{stat.number}</span>
            <span className="ticker-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsTicker;
