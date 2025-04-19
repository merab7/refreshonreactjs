import videoGamepic from './assets/profile.jpeg'


function Card() {
    return(
        <div className="card">
               <img className='profile_img' src={videoGamepic} alt="Profile picture" />
               <h2>Merab</h2>
               <p>I am backend developer and learning new staff</p>
        </div>
        )
}


export default Card