import React, { useState } from "react";
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';
import Button from './components/Button';
import { initialFriends } from './data/initialFriends';

export default function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  function handleAddFriend(newFriend) {
    setFriends((prevFriends) => [...prevFriends, newFriend]);
    setShowAddFriendForm(false);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriendForm(false);
  }

  return (
    <div className="app fade-in">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriendForm && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={() => setShowAddFriendForm((show) => !show)}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <div className="slide-in">
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
          />
        </div>
      )}
    </div>
  );
}