export default function NavBar(props) {
    const router = props.router;
    return (
        <>
            <nav id='mainNav'>
                <p className='brandName'>RandomPhotographer | Photography</p>
                <ul id='listNav'>
                    <li className='listItem'><a href="/" onClick={(event) => {
                        event.preventDefault();
                        router.push('/');
                    }}>&#62;</a></li>
                    <li className='listItem'><a href="nature" onClick={(event) => {
                        event.preventDefault();
                        router.push('nature');
                    }}>Nature</a></li>
                    <li className='listItem'><a href="cities" onClick={(event) => {
                        event.preventDefault();
                        router.push('cities');
                    }}>Cities</a></li>
                    <li className='listItem'><a href="houses" onClick={(event) => {
                        event.preventDefault();
                        router.push('houses');
                    }}>Houses</a></li>
                    <li className='listItem'><a href="technology" onClick={(event) => {
                        event.preventDefault();
                        router.push('technology');
                    }}>Technology</a></li>
                </ul>
            </nav>
        </>
    );
}