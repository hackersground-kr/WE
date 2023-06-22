package HackerGround.WEIN.domain.picture;

import HackerGround.WEIN.domain.board.Board;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class BoardPicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BOARDPIC_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="BOARD_ID")
    private Board board;

    private String fileName;
    private String filePath;
    private LocalDateTime createTime;
}
