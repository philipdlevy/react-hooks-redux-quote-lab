import React from "react";
import { upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteCard({quote}) {

  const dispatch = useDispatch()

  function handleClick() {
    dispatch(upvoteQuote(quote.id))
  }

  function handleDownvote() {
    dispatch(downvoteQuote(quote.id))
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{/*Render Quote Content*/quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{/*Render Quote Author*/quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleClick}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownvote}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {/*Render Quote Votes*/quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
