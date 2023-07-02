/* eslint-disable react/prop-types */

const Square = (props) => {
  return (
    <div className='h-[150px] justify-center items-center flex  w-[150px] border-4'
      onClick={props.onClick}
    >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
