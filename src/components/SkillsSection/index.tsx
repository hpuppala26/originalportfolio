import React from "react";
import JavascriptLogo from "@images/icons/javascript-logo.svg";
import PythonLogo from "@images/icons/python-logo.svg";
import TypescriptLogo from "@images/icons/typescript-logo.svg";
import NodeJSLogo from "@images/icons/nodejs-logo.svg";
import MongoDBLogo from "@images/icons/mongo-logo.svg";
import PostgresSQLLogo from "@images/icons/postgresql-logo.svg";
import GitLogo from "@images/icons/git-logo.svg";
import DockerLogo from "@images/icons/docker-logo.svg";
import HTMLLogo from "@images/icons/html-5-logo.svg";
import CSSLogo from "@images/icons/css-3-logo.svg";
import ReactLogo from "@images/icons/react-logo.svg";
import NextJSLogo from "@images/icons/nextjs-logo.svg";
import ReduxLogo from "@images/icons/redux-logo.svg";
import GoLangLogo from "@images/icons/golang-logo.svg";
import JavaLogo from "@images/icons/java-logo.svg";
import RedisLogo from "@images/icons/redis-logo.svg";
import KafkaLogo from "@images/icons/kafka-logo.svg";
import MSSQLLogo from "@images/icons/mssql-logo.svg";
import AWSLogo from "@images/icons/aws-logo.svg";
import GrafanaLogo from "@images/icons/grafana-logo.svg";
import SparkLogo from "@images/icons/spark-logo.svg";
import AirflowLogo from "@images/icons/airflow-logo.svg";
import HadoopLogo from "@images/icons/hadoop-logo.svg";
import NumpyLogo from "@images/icons/numpy-logo.svg";
import PandasLogo from "@images/icons/pandas-logo.svg";
import SciKitLearnLogo from "@images/icons/scikitlearn-logo.svg";
import TensorFlowLogo from "@images/icons/tensorflow.svg";
import DjangoLogo from "@images/icons/django-icon.svg";
import NewRelicLogo from "@images/icons/new_relic_logo_horizontal.svg";

// import { SKILLS } from "@/constants/menu";
import AppSection from "../AppSection";
import SkillsSubSection from "./SkillsSubSection";

const programmingSkills = [
  {
    id: "golang",
    logo: GoLangLogo,
    name: "Go",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "python",
    logo: PythonLogo,
    name: "Python",
    url: "https://www.python.org/doc/",
  },
  {
    id: "javascript",
    logo: JavascriptLogo,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "java",
    logo: JavaLogo,
    name: "Java",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  }
];

const frontendSkills = [
  {
    id: "html",
    logo: HTMLLogo,
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "css",
    logo: CSSLogo,
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "reactJS",
    logo: ReactLogo,
    name: "ReactJS",
    url: "https://reactjs.org/",
  },
  { id: "nextjs",
    logo: NextJSLogo,
    name: "NextJS",
    url: "https://nextjs.org/"
 }
];

const backendSkills = [
  {
    id: "node",
    logo: NodeJSLogo,
    name: "NodeJS",
    url: "https://nodejs.org/en/docs/",
  },
  {
    id: "django",
    logo: DjangoLogo,
    name: "Django",
    url: "https://www.djangoproject.com/",
  },
  {
    id: "kafka",
    logo: KafkaLogo,
    name: "Apache Kafka",
    url: "https://expressjs.com/en/api.html",
  },
  {
    id: "redis",
    logo: RedisLogo,
    name: "Redis Stack",
    url: "https://expressjs.com/en/api.html",
  }
];

const databaseSkills = [
  {
    id: "mongoDB",
    logo: MongoDBLogo,
    name: "MongoDB",
    url: "https://docs.mongodb.com/",
  },
  {
    id: "postgresSQL",
    logo: PostgresSQLLogo,
    name: "PostgresSQL",
    url: "https://www.postgresql.org/docs/",
  },
  {
    id: "MySQL",
    logo: MSSQLLogo,
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
];

const dataEngineeringSkills = [
  {
    id: "spark",
    logo: SparkLogo,
    name: "Apache Spark",
    url: "https://docs.docker.com/",
  },
  {
    id: "airflow",
    logo: AirflowLogo,
    name: "Airflow",
    url: "https://docs.docker.com/",
  },
  {
    id: "Hadoop",
    logo: HadoopLogo,
    name: "Hadoop",
    url: "https://docs.docker.com/",
  }
];

const machineLearningSkills = [
  {
    id: "numpy",
    logo: NumpyLogo,
    name: "Numpy",
    url: "https://docs.docker.com/",
  },
  {
    id: "pandas",
    logo: PandasLogo,
    name: "Pandas",
    url: "https://docs.docker.com/",
  },
  {
    id: "scikitlearn",
    logo: SciKitLearnLogo,
    name: "SciKit-Learn",
    url: "https://docs.docker.com/",
  },
  {
    id: "tensorflow",
    logo: TensorFlowLogo,
    name: "TensorFlow",
    url: "https://www.tensorflow.org/",
  }
];

const monitoringSkills = [
  {
    id: "grafana",
    logo: GrafanaLogo,
    name: "Grafana",
    url: "https://docs.docker.com/",
  },
  {
    id: "newrelic",
    logo: NewRelicLogo,
    name: "NewRelic",
    url: "https://newrelic.com/",
  }
];

const cloudSkills = [
  { id: "git", logo: GitLogo, name: "Git", url: "https://git-scm.com/doc" },
  {
    id: "docker",
    logo: DockerLogo,
    name: "Docker",
    url: "https://docs.docker.com/",
  },
  {
    id: "aws",
    logo: AWSLogo,
    name: "AWS",
    url: "https://www.aws.com/",
  }
];

function SkillsSection() {
  return (
    <AppSection headerTxt={"skills"}>
      <div className="flex lg:flex-row max-lg:flex-col-reverse flex-col sm:gap-12 gap-9 section-content-padding">
        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Programming Languages"} skills={programmingSkills} />
          <SkillsSubSection headerTxt={"Cloud"} skills={cloudSkills} />
          <SkillsSubSection headerTxt={"Machine Learning"} skills={machineLearningSkills} />
          <SkillsSubSection headerTxt={"Monitoring"} skills={monitoringSkills} />
        </div>

        <div className="lg:basis-2/4 basis-full flex flex-col sm:gap-12 gap-9">
          <SkillsSubSection headerTxt={"Backend"} skills={backendSkills} />
          <SkillsSubSection headerTxt={"Databases"} skills={databaseSkills} />
          <SkillsSubSection headerTxt={"Frontend"} skills={frontendSkills} />
          <SkillsSubSection headerTxt={"Data Engineering"} skills={dataEngineeringSkills} />
          
        </div>
      </div>
    </AppSection>
  );
}

export default SkillsSection;
