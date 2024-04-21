import IntersectionAnim from "./IntersectionAnim";
import NumHeading from "./NumHeading";
import { skillsDescription, skills } from "../consts";

const SkillsContent = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center py-4">
      <IntersectionAnim index={0} delay={0.2} type={"transLeft"}>
        <NumHeading number={2} content={"My Skills"} />
      </IntersectionAnim>
      <IntersectionAnim index={1} delay={0.2} type={"transRight"}>
        <p>
          {skillsDescription}
        </p>
      </IntersectionAnim>
      <div className="mt-8 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-40 gap-y-5">
        {skills.map((ele, index) => (
          <IntersectionAnim key={index} index={2} delay={0.1} type={"transUp"}>
            <div>
              <p className="primary-color">{ele.name}</p>
              <div>
                {ele.subSkills.map((sub, index) => (
                  <p className="font-mono" key={index}>
                    {sub}
                  </p>
                ))}
              </div>
            </div>
          </IntersectionAnim>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
