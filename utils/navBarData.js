import {
  BulbTwoTone,
  HomeTwoTone,
  InfoCircleTwoTone,
  ProjectTwoTone,
  ToolTwoTone,
  UpCircleTwoTone,
  ContactsTwoTone,
} from '@ant-design/icons/lib/icons';

const navbarsData = labels => [
  {
    label: labels.goUp,
    icon: <UpCircleTwoTone />,
    name: 'topRef',
  },
  {
    label: labels.aboutMe,
    icon: <InfoCircleTwoTone />,
    name: 'amRef',
  },
  {
    label: labels.professionalExperience,
    icon: <BulbTwoTone />,
    name: 'peRef',
  },
  {
    label: labels.projects,
    icon: <ProjectTwoTone />,
    name: 'pRef',
  },
  {
    label: labels.skills,
    icon: <ToolTwoTone />,
    name: 'sRef',
  },
  {
    label: labels.education,
    icon: <HomeTwoTone />,
    name: 'eRef',
  },
  {
    label: labels.contact,
    icon: <ContactsTwoTone />,
    name: 'cRef',
  },
];

export default navbarsData;
