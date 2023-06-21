package HackerGround.WEIN.domain.comment;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.picture.ReviewPicture;
import HackerGround.WEIN.domain.user.Member;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
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
}
