import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsList from '../store/actionsList';

//Чтобы быстро и легко вызывать любые имеющиеся екшены, мы создадали этот хук 
//который будет связывать все имеющиеся екшены из всех имеющихся слайсов и экспортировать их одним обхектом
//За связку всего будет отвечать - bindActionCreators
//Чтобы держать код чистым список всех екшенов я держу в отдельном файле - import * as actionsList from '../store/actionsList';
const useGetAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsList, dispatch);
};

export default useGetAction;