package HackerGround.WEIN.domain.comment;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.picture.ReviewPicture;
import HackerGround.WEIN.domain.member.Member;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REVIEW_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @Nullable
    @OneToMany(mappedBy = "review")
    private List<ReviewPicture> reviewPictureList =new ArrayList<>();

    private String title;
    private String description;
    private LocalDateTime createdTime;

    @Builder
    public Review(String title, String description, LocalDateTime createdTime) {
        this.title = title;
        this.description = description;
        this.createdTime = createdTime;
    }

    public Review update(Review review) {
        this.title = review.getTitle();
        this.description = review.getDescription();
        this.createdTime = review.getCreatedTime();
        return this;
    }
}
