"use client";

const skills = [
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 50 },
  { name: "JavaScript", level: 70 },
  { name: "Node JS", level: 30 },
  { name: "Express JS", level: 30 }
];

export default function TechStackProgress() {
  return (
    <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl w-full max-w-sm text-white">
      <h3 className="font-semibold mb-4 flex justify-center">Tech Stack Progress</h3>

      <div className="space-y-3">
        {skills.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
