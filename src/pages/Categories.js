import { CategoryContainer, CategoryCard } from "../styles/Categories.styled";

function Categories() {
  return (
    <CategoryContainer>
      <CategoryCard to={"/categories/arts"}>
        <h4>Arts</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/automobiles"}>
        <h4>Automobiles</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/books"}>
        <h4>Books</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/business"}>
        <h4>Business</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/climate"}>
        <h4>Climate</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/economy"}>
        <h4>Economy</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/education"}>
        <h4>Education</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/fashionandstyle"}>
        <h4>Fashion</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/health"}>
        <h4>Health</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/jobs"}>
        <h4>Jobs</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/movies"}>
        <h4>Movies</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/music"}>
        <h4>Music</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/politics"}>
        <h4>Politics</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/science"}>
        <h4>Science</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/space"}>
        <h4>Space</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/technology"}>
        <h4>Technology</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/television"}>
        <h4>Television</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/travel"}>
        <h4>Travel</h4>
      </CategoryCard>
      <CategoryCard to={"/categories/world"}>
        <h4>World</h4>
      </CategoryCard>
    </CategoryContainer>
  );
}

export default Categories;
