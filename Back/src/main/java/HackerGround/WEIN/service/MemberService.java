package HackerGround.WEIN.service;

import HackerGround.WEIN.repository.MemberRepsitory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepsitory memberRepsitory;
}
