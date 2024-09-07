import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { FaLinkedin } from "react-icons/fa6";
import teamData from '../../Data/team';

const TeamCard = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>
      <div className="flex flex-wrap justify-center">
        {teamData.map((member, index) => (
          <div key={index} className="m-4">
            <Card className="w-80">
              <CardMedia
                component="img"
                alt={member.name}
                height="200"
                image={member.image}
              />
              <CardContent className="flex flex-col items-center">
                <Typography variant="h6" className="text-center">
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mb-2 text-center"
                >
                  {member.role}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<FaLinkedin />}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
