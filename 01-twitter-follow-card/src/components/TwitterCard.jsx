const TwitterCard = ({ name, username, isFollowing }) => {

    const text = isFollowing ? "Siguiendo" : "Seguir";
    const myClass = isFollowing ? "follow isFollowing" : "follow"
  
  return (
    <article>
        <header>
            <img src="https://pbs.twimg.com/profile_images/1706686915167064064/Fh5d_3Mk_400x400.jpg" alt="Profile Img" />
            <div>
            <strong>{name}</strong>
            <span>{`@${username}`}</span>
            </div>
        </header>
        <aside>  
            <button className={myClass}>
                <span className="following-text">{text}</span>
                <span className="stop-following-text">Dejar de Seguir</span>
            </button>
        </aside>
    </article>
  )
}

export default TwitterCard
