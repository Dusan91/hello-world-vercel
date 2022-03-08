import LabelsEng from '../translations/eng';
import LabelsSrb from '../translations/srb';
const getLabels = lang => {
  if (lang === 'Eng') return LabelsEng;
  return LabelsSrb;
};

export default getLabels;
