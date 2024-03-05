from twilio.jwt.access_token import AccessToken
from twilio.jwt.access_token.grants import VideoGrant

# Your Twilio Account SID and API Key details
account_sid = 'AC4c4c5c98d54087c8b4be046ceb033a0e'  # Your Twilio Account SID
signing_key_sid = 'SKe38057a4ba3cc79c79d96953fa6cf356'  # Your API Key SID
signing_key_secret = 'm0lPwoNlkfNwI5ue6aVpoZcjZJyeMCF9'  # Your API Key Secret

# Create an AccessToken object
token = AccessToken(account_sid, signing_key_sid, signing_key_secret)

# Set the identity of the user (e.g., user's unique identifier)
identity = 'username'  # Replace with a unique user identifier
token.identity = identity

# Create a Video grant for the token
video_grant = VideoGrant()
token.add_grant(video_grant)

# Serialize the token to a JWT (JSON Web Token)
video_token = token.to_jwt()

# Print the generated video token (you can send it to your client-side code)
print(video_token)
