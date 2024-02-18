import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { additem } from '../../ReduxSlice/cartSlice';

const Section = ({ title, description, visible }) => {

    const { isVisible, setIsVisible } = visible;
    return (
        <div className='border-2 border-black w-[300px] m-auto'>
            <h1 className='font-bold text-lg'>{title}</h1>

            {/* Show / Hide Button  */}
            <button onClick={() => {
                isVisible == title ? setIsVisible('') : setIsVisible(title)
            }}>{isVisible == title ? "Hide" : "Show"}</button>

            {/* Description */}
            {isVisible == title && <p className='text-sm'>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    const [isVisible, setIsVisible] = useState('')
    const dispatch = useDispatch()
    const handleAdditem = () => {
        dispatch(additem("burger"))
    }

    return (
        <div className='min-h-screen'>
            <h1 className='text-orange-500 text-2xl font-bold py-10'>InstaMart</h1>

            <Section visible={{ isVisible, setIsVisible }} title={"InstaMart Team"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
            <Section visible={{ isVisible, setIsVisible }} title={"InstaMart Details"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
            <Section visible={{ isVisible, setIsVisible }} title={"InstaMart Career"} description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."} />
            {/* <button
                onClick={() => handleAdditem()}
            >Add Item</button> */}
        </div>

    )
}

export default Instamart