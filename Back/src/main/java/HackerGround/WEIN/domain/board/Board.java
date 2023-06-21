package HackerGround.WEIN.domain.board;

import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.picture.BoardPicture;
import HackerGround.WEIN.domain.member.Member;
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
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="BOARD_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "board")
    private List<BoardPicture> boardPictures=new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<Review> reviews =new ArrayList<>();



    private String boardTitle;
    private String description;
    private LocalDateTime createTime;
    private Long viewCount;
    private Long heartCount;
}
