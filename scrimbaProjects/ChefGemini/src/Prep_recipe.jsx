import './prep.css'

export default function Prep_recipe(){
    return(
        <article>
            <header>
                <h1>Creamy Tomato Basil Pasta</h1>
                <p>A quick, comforting weekday dinner made with fresh garlic, rich tomato paste, a splash of cream, and fresh basil leaves.</p>
                

                <div className="recipe-meta">
                    <div className="meta-item">Prep Time: <time ><strong>10 mins</strong></time></div>
                    <div className="meta-item">Cook Time: <time ><strong>15 mins</strong></time></div>
                    <div className="meta-item">Servings: <strong>4 servings</strong></div>
                </div>
            </header>
            <section aria-labelledby="ingredients-title">
                <h2 id="ingredients-title">Ingredients</h2>
                <ul className="ingred-list">
                    <li>12 oz (340g) Rigatoni or Penne pasta</li>
                    <li>2 tbsp Olive oil</li>
                    <li>4 cloves Garlic, minced</li>
                    <li>6 oz (170g) Tomato paste</li>
                    <li>1 cup Heavy cream</li>
                    <li>1/2 cup Pasta water (reserved before draining)</li>
                    <li>1/2 cup Parmigiano-Reggiano, freshly grated</li>
                    <li>1 cup Fresh basil leaves, roughly chopped</li>
                    <li>Salt and crushed red pepper flakes to taste</li>
                </ul>
            </section>

            <section aria-labelledby="instructions-title">
                <h2 id="instructions-title">Instructions</h2>
                <ol className="instructions-list">
                    <li><strong>Cook the pasta:</strong> Bring a large pot of salted water to a boil. Cook the pasta according to package instructions until al dente. <em>Crucial step: Reserve 1/2 cup of pasta water before draining.</em></li>
                    <li><strong>Sauté the aromatics:</strong> While the pasta cooks, heat olive oil in a large skillet over medium heat. Add the minced garlic and a pinch of red pepper flakes. Sauté for 1 minute until fragrant, making sure the garlic doesn't burn.</li>
                    <li><strong>Build the sauce base:</strong> Add the tomato paste to the skillet. Stir and cook for 2–3 minutes until the paste darkens to a deep brick-red color. </li>
                    <li><strong>Incorporate the cream:</strong> Pour in the heavy cream, whisking constantly until the tomato paste smoothly incorporates into a rich, orange sauce. Simmer gently for 2 minutes.</li>
                    <li><strong>Toss and emulsify:</strong> Add the drained pasta directly into the skillet. Pour in half of the reserved pasta water and the grated cheese. Toss vigorously over low heat until the sauce coats the pasta beautifully. Add more pasta water if the sauce looks too thick.</li>
                    <li><strong>Finish and serve:</strong> Turn off the heat. Stir in the fresh basil leaves. Season with extra salt if needed, and serve immediately with more cheese on top.</li>
                </ol>
            </section>

            <footer className="note">
                <p><strong>Chef's Tip:</strong> Don't skip cooking down the tomato paste in step 3! Frying the paste carmelizes its natural sugars, removing the raw, metallic can taste and creating a much deeper flavor flavor profile.</p>
            </footer>
        </article>
    )
}