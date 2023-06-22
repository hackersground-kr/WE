package HackerGround.WEIN.domain.comment;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.picture.ReviewPicture;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.board.BoardModifyRequest;
import HackerGround.WEIN.dto.review.ReviewModifyRequest;
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
    public Review(Board board,Member member,String title, String description, LocalDateTime createdTime) {
        this.board=board;
        this.member=member;
        this.title = title;
        this.description = description;
        this.createdTime = createdTime;
    }

    public Review update(ReviewModifyRequest reviewModifyRequest) {
        this.title = reviewModifyRequest.getTitle();
        this.description = reviewModifyRequest.getDescription();
        return this;
    }

}
