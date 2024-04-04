import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-300 p-4 m-4 rounded-2xl bg-white'>
            <h3 className='text-2xl'>{title}</h3>
           
        </div>
    );
};
Bookmark.PropTypes = {
    bookmark: PropTypes.object
    
}   
export default Bookmark;