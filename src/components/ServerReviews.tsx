
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Star, StarHalf, ThumbsUp, Flag, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { formatDate, calculateAverageRating } from '@/lib/utils';
import { ServerClient, Review } from '@/lib/types';
import { getServerReviews } from '@/lib/mockData';

interface ServerReviewsProps {
  server: ServerClient;
}

const StarRating: React.FC<{ rating: number; interactive?: boolean; onChange?: (rating: number) => void }> = ({ 
  rating, 
  interactive = false,
  onChange
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const handleClick = (rating: number) => {
    if (interactive && onChange) {
      onChange(rating);
    }
  };
  
  const handleMouseEnter = (rating: number) => {
    if (interactive) {
      setHoverRating(rating);
    }
  };
  
  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0);
    }
  };
  
  const activeRating = hoverRating > 0 ? hoverRating : rating;
  
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) => (
        <div 
          key={i} 
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)} 
          onMouseLeave={handleMouseLeave}
          className={interactive ? 'cursor-pointer' : undefined}
        >
          {i <= activeRating ? (
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ) : i - 0.5 <= activeRating ? (
            <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ) : (
            <Star className="h-5 w-5 text-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);
  
  return (
    <div className="py-4 border-b last:border-0">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <Avatar>
            <AvatarImage src={review.user.avatar_url} alt={review.user.name} />
            <AvatarFallback>{review.user.name[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{review.user.name}</div>
            <div className="flex items-center gap-2">
              <StarRating rating={review.rating} />
              <span className="text-sm text-muted-foreground">
                {formatDate(review.created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-3 ml-10 text-sm">
        <p>{review.comment}</p>
        
        <div className="flex items-center gap-4 mt-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-xs flex items-center gap-1 ${isHelpful ? 'text-green-600' : ''}`}
            onClick={() => setIsHelpful(!isHelpful)}
          >
            <ThumbsUp className="h-3.5 w-3.5" />
            {isHelpful ? 'Helpful' : 'Mark as helpful'}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-xs flex items-center gap-1 ${isFlagged ? 'text-red-600' : ''}`}
            onClick={() => setIsFlagged(!isFlagged)}
          >
            <Flag className="h-3.5 w-3.5" />
            {isFlagged ? 'Flagged' : 'Report'}
          </Button>
        </div>
      </div>
    </div>
  );
};

const ServerReviews: React.FC<ServerReviewsProps> = ({ server }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [reviews, setReviews] = useState<Review[]>(getServerReviews(server.id));
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const averageRating = calculateAverageRating(reviews);
  const reviewCount = reviews.length;
  
  const hasUserReviewed = user ? reviews.some(review => review.user_id === user.id) : false;
  
  const handleSubmitReview = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to leave a review.",
        variant: "destructive"
      });
      return;
    }
    
    if (userRating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Mock API call - In a real application, this would be an actual API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newReview: Review = {
        id: `r${Math.floor(Math.random() * 10000)}`,
        server_id: server.id,
        user_id: user.id,
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
        },
        rating: userRating,
        comment: userComment,
        created_at: new Date().toISOString(),
      };
      
      setReviews([newReview, ...reviews]);
      setUserRating(0);
      setUserComment('');
      
      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      });
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your review. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Reviews</span>
            <div className="flex items-center gap-2">
              <StarRating rating={averageRating} />
              <span className="text-lg">{averageRating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">({reviewCount} {reviewCount === 1 ? 'review' : 'reviews'})</span>
            </div>
          </CardTitle>
          <CardDescription>
            See what others think about this server or share your own experience.
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {!hasUserReviewed && user && (
            <div className="mb-6 p-4 border rounded-md">
              <h4 className="font-medium">Write a review</h4>
              
              <div className="mt-3">
                <p className="text-sm mb-2">Your rating</p>
                <StarRating 
                  rating={userRating} 
                  interactive={true} 
                  onChange={setUserRating}
                />
              </div>
              
              <div className="mt-4">
                <Textarea
                  placeholder="Share your experience with this server..."
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  rows={4}
                />
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button 
                  onClick={handleSubmitReview}
                  disabled={submitting || userRating === 0}
                >
                  {submitting ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </div>
          )}
          
          {hasUserReviewed && (
            <div className="mb-6 p-4 border rounded-md bg-muted/30">
              <p className="text-sm text-muted-foreground">
                You have already reviewed this server.
              </p>
            </div>
          )}
          
          <div className="divide-y">
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))
            ) : (
              <div className="py-8 text-center">
                <MessageCircle className="mx-auto h-12 w-12 text-muted-foreground/50 mb-3" />
                <h4 className="text-lg font-medium">No reviews yet</h4>
                <p className="text-muted-foreground mt-1">Be the first to review this server!</p>
              </div>
            )}
          </div>
        </CardContent>
        
        {!user && (
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Please <Button variant="link" className="h-auto p-0">sign in</Button> to leave a review.
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ServerReviews;
