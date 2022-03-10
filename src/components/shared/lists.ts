import { RootState } from './../../redux/store';
import { useSelector } from 'react-redux';
export const createBedsList = () => {
  const selectedAreaText = useSelector((state: RootState) => state.garden.selectedAreaName);
  const selectedAreasBeds = useSelector(
    (state: RootState) => state.garden.areas[selectedAreaText as string].beds
  );

  return selectedAreasBeds;
};
