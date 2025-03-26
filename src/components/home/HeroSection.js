import Carousel from "react-bootstrap/Carousel";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img alt="" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffw800%2Fbackground%2F20230518%2Fpngtree-all-kinds-of-beauty-products-on-a-dark-background-image_2537075.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" height="700em" src="https://media.allure.com/photos/57d18462067b53970386200c/master/pass/natural-products.jpg?mbid=social_retweet"></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.summitmedia-digital.com%2Fcosmo%2Fimages%2F2023%2F04%2F13%2Fcosmo-hot-list-2023-main-image-1681358510.jpg&f=1&nofb=1&ipt=3d7188677959975e7ed8ab8123ea38a10f3c5de099d06fbd53c5e47f3340f03c&ipo=images" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HeroSection;
