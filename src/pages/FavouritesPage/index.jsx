import { Link } from 'react-router-dom';
import { useFavourites } from '../../context/FavouritesContext'
import FavouriteButton from '../../components/FavouriteButton';
import './favouritespage.css'

function FavouritesPage() {
    const { favourites } = useFavourites()

    if (favourites.length === 0) {
        return (
            <section className='favourites-page'>
                <h1 className='favourites-title'>Your Favourite Recipes</h1>
                <div className='favourites-empty'>
                    <p>You haven't saved any recipes yet.</p>
                    <Link to='/explore' className='favourites-browse'>
                        Browse Recipes
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className='favourties-pages'>
            <h1 className='favourites-title'>Your Favourite Recipes</h1>
            <br/>
            <div className='favourites-grid'>
                {favourites.map((recipe) => (
                    <article key={recipe.id} className='favourite-item'>
                        <Link to={`/recipe/${recipe.id}`}>
                            <img src={recipe.image} alt={recipe.name} />
                            <h2>{recipe.name}</h2>
                        </Link>
                        <FavouriteButton recipe={recipe} />
                    </article>
                ))}
            </div>
        </section>
    )

}

export default FavouritesPage;
