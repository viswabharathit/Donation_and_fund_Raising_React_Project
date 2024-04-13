package com.example.donation1.controller;

import com.example.donation1.model.Story;
// import com.example.donation1.repository.StoryRepository;
import com.example.donation1.service.StoryService;
import java.util.Optional;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stories")
public class StoryController {

    @Autowired
    private StoryService storyService;

    // @Autowired
    // private StoryRepository sr;

    @PostMapping("/{userId}")
    public ResponseEntity<?> createStoryForUser(@PathVariable Long userId, @RequestBody Story story) {
        try {
            Story createdStory = storyService.createStoryForUser(userId, story);
            return new ResponseEntity<>(createdStory, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error found", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<?> updateStory(@PathVariable Long userId, @RequestBody Story story) {
        try {
            return new ResponseEntity<>(storyService.updateStory(userId, story), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @GetMapping("/getting/{userId}")
    public ResponseEntity<?> getStoryById(@PathVariable Long userId) {
        try {
            return new ResponseEntity<>(storyService.getStoryById(userId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{storyId}")
    public ResponseEntity<Void> deleteStoryById(@PathVariable Long storyId) {
        Optional<Story> story = storyService.getStoryById(storyId);

        if (story.isPresent()) {
            storyService.deleteStoryById(storyId);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/sorting")
    public ResponseEntity<List<Story>> sortStoryByAmount() {
        List<Story> sortedStories = storyService.findAllStorySortedByAmount();
        return ResponseEntity.ok(sortedStories);
    }

    @GetMapping("/paging/{offset}/{pagesize}")
    public ResponseEntity<?> pageStory(@PathVariable int offset, @PathVariable int pagesize) {
        try {
            return new ResponseEntity<>(storyService.pageStory(offset, pagesize), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
