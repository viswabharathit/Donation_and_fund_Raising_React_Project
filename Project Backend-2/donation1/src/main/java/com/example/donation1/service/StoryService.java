package com.example.donation1.service;

import com.example.donation1.model.Story;
import com.example.donation1.model.User;
import com.example.donation1.repository.StoryRepository;
import com.example.donation1.repository.UserRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class StoryService {

    @Autowired
    private StoryRepository storyRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Story createStoryForUser(Long userId, Story story) {
        // Retrieve the user from the database
        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            story.setUser(user);
            return storyRepository.save(story);
        } else {
            // Handle the case where user is not found
            throw new RuntimeException("User not found with id: " + userId);
        }
    }

    public Story updateStory(Long userId, Story updatedStory) {
        // Retrieve the user from the database
        Optional<Story> userOptional = storyRepository.findById(userId);

        if (userOptional.isPresent()) {
            Story existingStory = userOptional.get();
            // Update the existing story with the new details
            existingStory.setTitle(updatedStory.getTitle());
            existingStory.setStory(updatedStory.getStory());
            existingStory.setAmount(updatedStory.getAmount());
            // You can update more fields as needed...

            // Save the updated story
            return storyRepository.save(existingStory);
        } else {
            // Handle the case where story is not found
            throw new RuntimeException("Story not found with id");
        }
    }

    @Transactional(readOnly = true)
    public List<Story> findAllStorySortedByAmount() {
        return storyRepository.findAllByOrderByAmount();
    }

    public Object pageStory(int offset, int pagesize) {
        Pageable page = PageRequest.of(offset, pagesize);
        return storyRepository.findAll(page).getContent();
    }

    public Optional<Story> getStoryById(Long userId) {
        return storyRepository.findById(userId);
    }

    public void deleteStoryById(Long storyId) {
        Optional<Story> storyOptional = storyRepository.findById(storyId);

        if (storyOptional.isPresent()) {
            storyRepository.deleteById(storyId);
        } else {
            throw new RuntimeException("Story not found with id: " + storyId);
        }
    }

}
