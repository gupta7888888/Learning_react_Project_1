import Card from './Card'
import {Data} from '../../Data'
import DataModal from './DataModal';


const Body = () => {
  const onSumbit= (data) =>{
    console.log(data);
  };
  return (
    <div className='flex gap-4 flex-wrap'>
      <DataModal onSumbit={onSumbit} />
        {Data.map((val)=>(
        <Card value={val}/>
))}
    </div>
  )
}

export default Body;