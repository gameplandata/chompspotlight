import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axiosInstance from '../axiosConfig';

export const useFollow = () => {
    const { user } = useAuthContext();
    const [error, setError] = useState(null);
    const [isLoading1, setIsLoading] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const [followingCount, setFollowingCount] = useState(0);
    const [followerCount, setFollowerCount] = useState(0);

    const follow = async (userId) => {
        setIsLoading(true)
        setError(null)

        axiosInstance.post(`/follow/follow/${userId}`)
            .then(response => {
                setIsLoading(false)
                setIsFollowing(true);
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.response.data.error);
            });
    }

    const unfollow = async (userId) => {
        setIsLoading(true)
        setError(null)

        axiosInstance.post(`/follow/unfollow/${userId}`)
            .then(response => {
                setIsLoading(false)
                setIsFollowing(false);
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.response.data.error);
            });
    }

    const isFollowingUser = async (userId) => {
        if (user == null) {
            setIsFollowing(false);
        }
        setIsLoading(true)
        setError(null)
        try {
            const response = await axiosInstance.get(`/follow/isFollowing/${userId}`);
            setIsFollowing(response.data.isFollowing);
        } catch (error) {
            setIsFollowing(false);
            setError(error);
        }
        setIsLoading(false);
    }

    const getFollowingCount = async (userId) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axiosInstance.get(`/follow/followCount/${userId}`);
            setFollowingCount(response.data.followCount);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    const getFollowerCount = async (userId) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axiosInstance.get(`/follow/followerCount/${userId}`);
            setFollowerCount(response.data.followerCount);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    return { follow, unfollow, isLoading1, error, isFollowing, isFollowingUser, getFollowingCount, getFollowerCount, followingCount, followerCount};
}