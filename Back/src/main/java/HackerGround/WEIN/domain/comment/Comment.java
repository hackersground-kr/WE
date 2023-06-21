package HackerGround.WEIN.domain.comment;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.picture.CommentPicture;
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
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "COMMENT_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @Nullable
    @OneToMany(mappedBy = "comment")
    private List<CommentPicture> commentPictureList=new ArrayList<>();

    private Long userId;

    private String title;
    private String description;
    private LocalDateTime createdTime;
}
