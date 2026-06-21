import { TypeAnimation } from "react-type-animation";

const Terminal = () => {
    return (
        <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#915eff]/30 bg-[#0d1117] shadow-[0_0_50px_rgba(145,94,255,0.15)]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <span className="text-gray-400 text-sm font-mono">himanshu@yotta-cloud</span>

                <span className="text-xs text-green-400 font-mono animate-pulse">● Connected</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-green-400 text-sm md:text-base min-h-[300px]">
                <TypeAnimation
                    sequence={[
                        `$ kubectl get pods -n apiculus

NAME                STATUS
api-gateway         Running
rabbitmq            Running
kafka               Running
cloudstack-sync     Running`,
                        2500,
                        `$ docker ps

CONTAINER ID   IMAGE           STATUS
d2f4c8ab       apiculus-api    Up 14 days
7f5ab3de       rabbitmq        Up 14 days`,
                        2500,
                        `$ systemctl status apiculus-api

● apiculus-api.service
Active: active (running)
Memory: 284M
CPU: 2.1%`,
                        2500,
                        `$ git log --oneline -3

a8f34d2 Added VM provisioning workflow
e7b2c11 RabbitMQ event optimization
d3a5b91 Kubernetes deployment update`,
                        2500,
                        `$ tech-stack

Frontend:
✓ React.js
✓ Next.js
✓ TypeScript

Backend:
✓ Node.js
✓ NestJS

Cloud:
✓ Docker
✓ Kubernetes
✓ Kafka
✓ RabbitMQ`,
                        2500,
                        `$ whoami

Himanshu Garg

Full Stack Developer
Cloud Native Engineer

Building scalable applications,
microservices and cloud platforms.`,
                        5000,
                    ]}
                    wrapper="pre"
                    speed={75}
                    repeat={Infinity}
                    cursor={true}
                    style={{
                        whiteSpace: "pre-wrap",
                        display: "block",
                    }}
                />
            </div>

            {/* Tech Tags */}
            <div className="border-t border-gray-800 px-6 py-4 flex flex-wrap gap-2 bg-[#161b22]">
                {[
                    "Node.js",
                    "NestJS",
                    "React",
                    "Next.js",
                    "Docker",
                    "Kubernetes",
                    "Kafka",
                    "RabbitMQ",
                    "MongoDB",
                    "MS SQL",
                ].map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff]"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Terminal;
