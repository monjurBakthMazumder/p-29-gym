import PropTypes from 'prop-types';
import { LiaHandPointRightSolid } from 'react-icons/lia';
const Option = ({option}) => {
    const {name, price, features, duration, description, id} = option
    return (
        <div className="card card-compact bg-base-100 shadow-xl border">
            <div className="card-body">
            <h1 className='text-center'><span className='text-7xl font-bold'>{price}</span>/<span className='text-sm font-light'>{duration}</span></h1>
                <h2 className="card-title">{name}</h2>
                <p className='text-justify text-sm'>{description}</p>
                <p className='text-xs font-bold underline cursor-pointer' onClick={()=>document.getElementById(`my_modal_${id}`).showModal()}>Details</p>
                <dialog id={`my_modal_${id}`} className="modal">
                <div className="modal-box">
                    <div className="card-body">
                        <h1 className='text-center'><span className='text-7xl font-bold'>{price}</span>/<span className='text-sm font-light'>{duration}</span></h1>
                        <h2 className="card-title">{name}</h2>
                        <p className='text-justify text-sm'>{description}</p>
                        <p>
                            {
                                features.map((feature, index)=> 
                                    <p 
                                    className='flex items-center gap-1'
                                    key={index}
                                    >
                                        <LiaHandPointRightSolid/>{feature}
                                    </p>
                                )
                            }
                        </p>
                    </div>
                    <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
        </div>
    );
};

Option.propTypes = {
    option : PropTypes.object,
};

export default Option;