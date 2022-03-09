import styles from '../../styles/main.module.css';
// import API from '../../services/api';
import { useRouter } from 'next/router';
import getLabels from '../../utils/getLanguageLabels';
import { useLanguage } from '../../utils/useLanguage';
import DB from '../../db.json';
const ProjectId = ({ project }) => {
  const { language } = useLanguage();
  const labels = getLabels(language);

  const router = useRouter();
  const handleGoBack = () => router.back();
  return (
    <div className={styles.projectDetails}>
      <h1 className={styles.title}>{project.name}</h1>
      <div
        className={`${styles.flexRow} ${styles.justifyContentSpace}  ${styles.alignItemsStart}`}
      >
        <div className={`${styles.size2} `}>
          <h1>{labels.tehnologies}</h1>
          <h2>{project.tehnologies.name}</h2>
          <ul>
            {project.tehnologies.options.map(opt => (
              <li className={styles.tag} key={opt}>
                {opt}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.size10}>
          {project.client && <h1>{project.client}</h1>}
          <p className={`${styles.text}`}>{project.desc[language]}</p>
        </div>
      </div>
      <div className={styles.justifyContentEnd}>
        <button
          style={{ marginTop: '10rem' }}
          className={styles.buttonSquare}
          onClick={handleGoBack}
        >
          &#8592; {labels.goBack}
        </button>
      </div>
    </div>
  );
};

ProjectId.getInitialProps = async ({ query }) => {
  // const project = await API.getProject(query.projectId);
  const data = JSON.parse(JSON.stringify(DB));
  const project = data.projects.filter(
    project => project.id === query.projectId
  );
  return { project: project.length ? project[0] : null };
};
export default ProjectId;
