package HackerGround.WEIN.domain.board;

import HackerGround.WEIN.domain.comment.Comment;
import HackerGround.WEIN.domain.like.Like;
import HackerGround.WEIN.domain.picture.BoardPicture;
import HackerGround.WEIN.domain.user.User;
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
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @OneToMany(mappedBy = "board")
    private List<BoardPicture> boardPictures=new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<Comment> comments=new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<Like> likes=new ArrayList<>();


    private String yodayeong;
    private String boardTitle;
    private String description;
    private LocalDateTime createTime;
    private Long viewCount;

}
