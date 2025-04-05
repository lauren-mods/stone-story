# Readme

## To Do

- [x] add in dice rolls
  `maybe use let outcome = neutral`
- [x] have the next part of the story initialise
- [ ] save the player name
- [x] save the player variables
- [x] have buttons
- [ ] and a text field for user input

## Journal

### Day 2

#### Remembering player choices

I researched a bunch of different ways to remember choices and action:

- cookies
- cache
- locadata

I did not know that localdata was a thing, so I am now updating all my code so that attribute choice and modifiers are a thing. Also, I learned that the cache is really just for images and videos.

#### Setting the modifiers

Working on a way to set all modifiers but only asking about the first two. 

### Day 1

I had the idea to make a choose your own adventure story game using JavaScript, HTML and CSS.

I am thinking of having the following attributes:

- Brains
- Brawn
- Instincts (Chat GPT helped a lot with this one, as I couldn't settle on the right word.)

We are also going to have d6 rolls

- 1-2 → a good outcome
- 3-4 → a neutral outcome
- 5-6 → a good outcome
- +Modifiers → Based on the player's chosen strengths
