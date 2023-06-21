package HackerGround.WEIN.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;


@SpringBootTest
class MemberServiceTest {

    @Autowired
    MemberService memberService;

    @Test
    @Transactional
    @Rollback(false)
    void save_Temp() {
        memberService.save_Temp();
    }


}