import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID  } from "@/config";
import ProjectItem from "@/components/projects/project-item";

export default function Projects({projects}) {

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6"><Head>
                <title>김마유 포트폴리오</title>
                <meta name="description" content="오늘도 빡코딩" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : 
                <span className="pl-4 text-blue-500">{projects.results.length}</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
                {projects.results.map((aProject) => (
                    <ProjectItem key = {aProject.id} data={aProject}/>
                ))}
            </div>
            
            </div>
            

        </Layout>
    );
}

export async function getStaticProps(){

    const options = {
        method: 'POST',
        headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
            sorts:[
                {
                    "property" : "title",
                    "direction" : "ascending"
                }
            ],
            page_size: 100})
    };
    
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects =await res.json()

    const projectNames = projects.results.map((aProject) => {
        aProject.properties.이름.title[0].plain_text;
      });
    
    console.log(`projectNames : ${projectNames}`);

    return {
            props: { projects},
    };
}
    