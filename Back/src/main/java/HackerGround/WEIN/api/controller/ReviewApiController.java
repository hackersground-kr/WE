package HackerGround.WEIN.api.controller;

import HackerGround.WEIN.model.response.CommonResult;
import HackerGround.WEIN.service.ResponseService;
import HackerGround.WEIN.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ReviewApiController {

    private final ReviewService reviewService;
    private final ResponseService responseService;

    @GetMapping("/review/create") {
        public CommonResult save(@Validated @RequestBody )
    }
}
