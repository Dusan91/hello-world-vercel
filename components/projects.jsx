import { ProjectTwoTone } from '@ant-design/icons/lib/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/main.module.css';
const Projects = ({ projects, labels }) => {
  const router = useRouter();
  const handleGoToItem = item => router.push(`/project/${item.id}`);
  const renderProjects = (item, i) => {
    return (
      <div className={`${styles.project} tooltip`} key={i}>
        <span className="tooltiptext-projects">{labels.seeDetails}</span>
        <Link href={`/project/${item.id}`}>{item.name}</Link>
      </div>
    );
  };
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.fullContent}>
        <h2 className={styles.subHeader}>
          <ProjectTwoTone />
          <span className={styles.subHeaderText}>{labels.projects}</span>
        </h2>
        <hr />
        <div className={styles.projectList}>
          {projects && projects.map((item, i) => renderProjects(item, i))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
