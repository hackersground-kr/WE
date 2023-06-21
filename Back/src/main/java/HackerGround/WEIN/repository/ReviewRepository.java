package HackerGround.WEIN.repository;

import HackerGround.WEIN.domain.comment.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
